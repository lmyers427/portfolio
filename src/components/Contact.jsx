import React from 'react'






const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // You can access form data here and send it to Netlify or perform other actions as needed
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new FormData(e.target), // Send form data to Netlify
      });
      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
      } else {
        // Handle submission errors
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit="Submit"  className='flex flex-col max-w-[600px] w-full'>

        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#58b6d8] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'> Submit the form below or send me an email - lauren.m.scott427@gmail.com</p>
        </div>
        <input type="hidden" name="form-name" value="contact" />

        <p className='hidden'>
          <input name="bot-field" />
        </p>
       
         <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />   
         <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />   
        <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
        
        <button type="submit" className='text-white border-2 hover:bg-[#58b6d8] hover:border-[#58b6d8] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
