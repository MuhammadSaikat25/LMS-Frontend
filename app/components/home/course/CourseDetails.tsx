import Heading from "@/app/utils/Heading";
import Header from "../../Header";
import CourseDetailsComponent from "./CourseDetailsComponent";
import {
  useCratePaymentMutation,
  useGetStripePkQuery,
} from "@/app/redux/feature/order/orderApi";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "next/navigation";
import { useGetSingleCourseQuery } from "@/app/redux/feature/course/courseApi";
const CourseDetails = () => {
  const { data: stripePk } = useGetStripePkQuery(undefined);
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClintSecret] = useState("");
  const { id } = useParams();
  const { data: course } = useGetSingleCourseQuery(id!, { skip: !id });
  const [cratePayment, { data: paymentData }] = useCratePaymentMutation();

  useEffect(() => {
    if (stripePk) {
      const pk = stripePk.pk;
      setStripePromise(loadStripe(pk));
    }
    if (course) {
      const amount = Math.round(course.data.price * 100);
      cratePayment({ amount });
    }
  }, [stripePk, course]);
  useEffect(() => {
    if (paymentData) {
      setClintSecret(paymentData.client_secret);
    }
  }, [paymentData]);

  return (
    <div>
      <Heading
        title="Coding-Hero"
        description="Let’s Code_Your Career"
        keyword="programming"
      />
      <Header />
      <div className="bg-[#010313] h-svh">
        {stripePromise && (
          <CourseDetailsComponent clientSecret={clientSecret}stripePromise={stripePromise} />
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
