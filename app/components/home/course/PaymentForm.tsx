import { useCrateOrderMutation } from "@/app/redux/feature/order/orderApi";
import { useGetAllUserQuery } from "@/app/redux/feature/user/userApi";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  course: any;
};

const PaymentForm = ({ course }: Props) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { refetch } = useGetAllUserQuery(undefined);
  const [message, setMessage] = useState<any>();
  const [crateOrder, { data: orderData, error }] = useCrateOrderMutation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      setIsLoading(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setIsLoading(false);
      crateOrder({
        courseId: course._id,
        paymentInfo: paymentIntent,
      });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (orderData) {
      router.push("/");
      refetch();
    }
    if (error) {
      if ("data" in error) {
        const err = error as any;
        setMessage(err.data.message);
      }
    }
  }, [orderData, error]);
  return (
    <div className="text-black">
      <form id="payment-form" onSubmit={handleSubmit}>
        <LinkAuthenticationElement id="link-authentication-element" />
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              <p className="bg-red-500 px-3 rounded-3xl text-white mt-2">
                Pay now
              </p>
            )}
          </span>
        </button>

        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
