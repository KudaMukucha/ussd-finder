import Accordion from "../components/Accordion";

export default function Faqs() {
  return (
    <div className="px-4 lg:px-20 pt-4  bg-gradient-to-b from-blue-100 via-blue-300 min-h-screen pb-16">
        <div className="items-center text-center mt-20 pb-9">
        <h2 className='mt-5 font-extrabold text-4xl text-blue-950'>Frequently Asked Questions</h2>
        </div>
       <div>
       <Accordion question ={'What is USSD?'} answer={'USSD stands for Unstructured Supplementary Service Data. It is a technology used by mobile network operators to provide interactive services to mobile phone users. USSD codes are short, dialed strings that can be used to access various services, such as checking account balance, subscribing to plans, or transferring funds.'}/>
       <Accordion question={'How can I find USSD codes for a specific service?'} answer={'In the USSD Finder App, you can search for USSD codes by using relevant keywords or selecting a specific category. The app provides a comprehensive database of USSD codes for various services offered by mobile network operators in Zimbabwe.'}/>
       <Accordion question={'Are USSD codes different for each mobile network operator?'} answer={'Yes, USSD codes can vary between different mobile network operators. Each operator may have its own set of codes for services such as balance inquiry, data packs, promotions, and more. The USSD Finder App provides a collection of codes from multiple operators to cater to a wide range of users.'}/>
       <Accordion question={'Are the USSD codes updated regularly?'} answer={'Yes, the USSD Finder web app strives to keep the USSD code database up-to-date. The app regularly reviews and updates the codes to ensure accuracy. However, please note that codes may change over time, so it is always a good idea to verify the codes with your mobile network operator.'}/>
       <Accordion question={'Can I use USSD codes on any type of mobile phone?'} answer={'USSD codes can be used on most mobile phones, including both smartphones and feature phones. Whether you have an Android, iOS, or basic phone, you can typically access USSD services by dialing the appropriate code on your device\'s keypad.'}/>
       <Accordion question={'Are USSD codes free to use?'} answer={'USSD codes are generally free to use for accessing basic services provided by mobile network operators, such as checking balances or subscribing to plans. However, it\'s important to note that some specialized services or premium features may involve charges. It\'s recommended to check with your mobile network operator for any applicable fees associated with specific USSD codes or services.'}/>
       <Accordion question={'Can I suggest improvements or report issues with the website?'} answer={'Absolutely! The USSD Finder web app values user feedback and encourages you to suggest improvements or report any issues you encounter. You can use the in-app feedback feature to provide your suggestions, report bugs, or seek assistance. Your feedback helps us enhance the app\'s functionality and user experience.'}/>
       
       </div>
    </div>
  )
}
