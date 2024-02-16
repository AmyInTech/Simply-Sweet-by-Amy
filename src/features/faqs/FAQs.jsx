import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";

function FAQ() {
  // Accordion state
  const [accordionOpen, setAccordionOpen] = useState(null);

  // Function to handle accordion toggle
  const toggleAccordion = (index) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  // Questions and Answers for Accordion:
  const faqData = [
    {
      question: "Do you ship?",
      answer:
        "Unfortunately under Minnesota Cottage Food Law, Simply Sweet by Amy is not able offer shipping. All orders must be picked up locally.",
    },
    {
      question: "How do I pick up my order?",
      answer:
        "Pickup address will be provided 24 hours before the scheduled pickup date and time. For large orders (120+ macarons), pickup address will be provided with order confirmation. Located in a private residence in Eden Prairie, MN near Eden Prairie Mall.",
    },
    {
      question: "How do I pay for my order?",
      answer:
        "We currently collect payment at the time of pickup. This can be in the form of cash, Venmo, Zelle, or Apple Pay.",
    },
    {
      question: "How far in advance do I need to order?",
      answer:
        "Orders below 4 batches (under 120 individual macarons) must be placed 7 days (1 week) before the desired pickup date. Full payment will be collected at the time of pickup.",
    },
    {
      question: "What is the payment policy for larger orders (120+ macarons)?",
      answer:
        "Orders of over 4 batches (over 120 individual macarons) require a 50% non-refundable deposit that needs to be paid upon order confirmation/agreement via Venmo, Zelle, or Apple Pay. The remaining balance must be paid at the time of pick-up.",
    },
    {
      question: "Why are french macarons generally expensive?",
      answer:
        "Macarons are more expensive than the average pastry or sweet treat because of the costly ingredients and the time and expertiese involved in making them. Even with high level of training, there is always a chance that the notoriously hard-to-master macarons do not bake well or turn out correctly. Special time and care has to be taken to make these delicious and delicate treat.",
    },
    {
      question: "How do I reschedule a pickup?",
      answer:
        "Need to reschedule the pickup time? Please reach out at least 24 hours in advance. Orders may not be picked up before the scheduled pickup time as the order may not be prepared in time.",
    },
    {
      question: "What happens to no-shows?",
      answer:
        "No-show pickups will be refrigerated while a contact attempt is made. If no communication is received in 24 hours since the agreed pick-up time, the order will be forfeited and no refunds will be granted. Orders with repeat no-shows will be rejected. Please ensure up-to-date contact information when placing your order; Simply Sweet by Amy is not liable for no-shows related to incorrect contact information or failure to communicate.",
    },
    {
      question: "Is there a minimum order amount?",
      answer:
        "Yes, the minimum order amount is 12 macarons. This is due to the time and minimum amount of ingredients. The minimum amount of macarons per color is 1 dozen (12 macarons). The minimum amount of macarons per flavor is also 1 dozen (12 macarons). ",
    },
    {
      question:
        "How far in advance do I need to place an order if I want to order a large order (120+ macarons)?",
      answer:
        "Larger orders must be placed and confirmed at least 14 days (2 weeks) in advance.",
    },
    {
      question:
        "I sent you a message/order/email, when should I expect a response?",
      answer:
        "We try our best to respond in a timely manner. Please allow at least 24 hours since your communication has been sent for a response. We appreciate your patience!",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "If you are not satisfied with your order, please contact me within 7 days of pickup to discuss how to make it right with either a replacement or a refund.",
    },
    {
      question: "Can I alter my order or cancel it after it is placed?",
      answer:
        "If you made a mistake on the order, please contact us as soon as possible to see what can be done. Modifications on orders can be made if it is at least a week before the pick-up date. Cancellations are only accepted for orders that are canceled within 24 hours of order submission.",
    },
    {
      question: "How should I store my macarons?",
      answer:
        "Store your macarons in an airtight container in the refrigerator. This helps maintain their freshness and prevents them from drying out.",
    },
    {
      question: "Can I freeze my macarons?",
      answer:
        "If you need longer-term storage, our macarons can be frozen for up to 1 month and can be served at room temperature after defrosting for at least 1-2 hours.",
    },
    {
      question: "How long will the macarons stay good for?",
      answer:
        "For best results, our macarons should be consumed within 1 week.",
    },
    {
      question: "What are the ingredients in macarons?",
      answer:
        "Our most basic macaron shells are made with egg whites, granulated sugar, egg white powder (dehydrated egg whites which help control moisture content in the delicate cookies, allowing for the perfect texture and structure), almond flour, and powdered sugar. Our fillings are chocolate ganache based (white chocolate or bittersweet chocolate with heavy cream and corn syrup) mixed with flavoring components such as extracts.",
    },
    {
      question: "Are your macarons gluten-free?",
      answer:
        "Yes, our macarons are made with gluten-free ingredients but are made in a kitchen that handles gluten products.",
    },
    {
      question:
        "Do you accommodate certain food allergies or dietary restrictions?",
      answer:
        "We do not work in an allergen-free kitchen. Please refrain from ordering if you have severe allergies to nuts, almonds, and peanuts, dairy, soy and milk, eggs, food coloring, wheat and all related by-products of ingredients listed.",
    },
    {
      question: "What is the size of your macarons?",
      answer:
        "Our macarons are approximately 1.75 inches in diameter. Since they are handmade, the macarons may vary slightly in size.",
    },
    {
      question: "How many macarons do you recommend per person?",
      answer:
        "If serving other desserts, we recommend 2 macarons per person. If macarons are the only dessert being served, then we recommend 3-4 macarons per person.",
    },
    {
      question: "Do you provide macaron towers to display the macarons?",
      answer:
        "Unfortunately, we do not keep display towers on stock. If you are wanting a macaron display stand, they can be purchased on Amazon by Simply Sweet by Amy and the cost will be added to your purchase total.",
    },
    {
      question: "Do you have special packaging for individual party favors?",
      answer:
        "Unfortunately, we are not able to individually package each macaron at this time. Your order will come in box(es) and will need to be packaged at your own efforts as desired.",
    },
    {
      question: "Are your macarons suitable for special occasions?",
      answer:
        "Absolutely! Our macarons are perfect for special occasions, celebrations, or simply to satisfy your sweet tooth. Contact us for custom orders and special requests.",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-[#e3fafc] h-auto overflow-hidden pt-[140px] md:pt-[80px]">
      <div className="max-w-4xl bg-[#e3fafc] p-8 xs:p-0 md:mt-[80px] md:p-10 lg:p-14">
        <div className="flex items-center justify-center">
          <div className="flex items-stretch rounded-md bg-white shadow-md xs:w-screen xs:flex-col sm:w-auto">
            <div className="mb-4 mt-10 flex justify-center xs:text-center">
              <h1 className="font-[Sacramento] text-3xl text-[#22b8cf] xs:text-4xl sm:text-5xl md:text-6xl">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="rounded-md bg-white p-[20px]">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`duration-600 mb-4 w-[100%] border-b border-gray-200 transition-all ease-in-out`}
                >
                  <div
                    className={`duration-600 flex cursor-pointer items-center justify-between p-4 transition-all ease-in-out ${
                      accordionOpen === index ? "text-[#15aabf]" : "text-black"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h2 className="font-[Raleway] text-[16px] font-semibold mobile:text-[16px] sm:text-[16px] md:text-[18px] lg:text-[16px] max-w-[90%]">
                      {item.question}
                    </h2>
                    <span className="text-[#22b8cf]">
                      {accordionOpen === index ? "▲" : "▼"}
                    </span>
                  </div>
                  {accordionOpen === index && (
                    <div
                      className={`duration-600 mb-4 px-4
                      pb-2 font-[Raleway] text-[16px] leading-7 text-black transition-all ease-in-out mobile:text-[16px] sm:text-[16px] md:text-[18px] lg:text-[16px]`}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-2 pt-6 pb-8">
              <span className="font-[Raleway] text-[16px] font-bold text-[#22b8cf] pb-2">
                Have a question we didn't answer here?
              </span>
              <a
                href="/contact"
                className="flex items-center justify-center gap-4 rounded-md bg-[#3bc9db] px-8 py-2 text-sm font-semibold text-white text-[18px] uppercase tracking-[2px] shadow-sm hover:bg-[#66d9e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf] hover:scale-105 transition-transform duration-3000"
              >
                <IoMailOutline /> Send us a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
