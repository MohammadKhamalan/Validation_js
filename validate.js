      
        function isvalidate_email(email) {
            const em = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return em.test(email);
        }
    function isvalidate_password(passw){

            const pass=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8}$/;
            return pass.test(passw);
        }
     
           
          
       