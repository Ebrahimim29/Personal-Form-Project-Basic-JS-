const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const familyInput = document.getElementById("family");
const emailInput = document.getElementById("email");
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const genderSelect = document.getElementById("gender");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

let people = [];

// دکمه مربوط به افزودن کاربران
form.addEventListener("submit" , function(e) {
    e.preventDefault()

    //e.preventDefault : رفتار پیش فرضی که مرورگر نسبت به رویداد انجام می دهد را متوقف می کند در اینجا جلوی ریلو شدن صفحه را می گیرد.
    console.log();

    const newPerson = {
        name : nameInput.value.trim(),
        family : familyInput.value.trim(),
        email : emailInput.value.trim(),
        job : jobInput.value.trim(),
        phone : phoneInput.value.trim(),
        gender : genderSelect.value
    }

    if (!newPerson.name || !newPerson.family || !newPerson.email){
        alert("لطفا فیلدهای الزامی را وارد کنید!");
        return
    }


    people.push(newPerson);
    form.reset();

    //reset(): فقط برای ریست کردن مقادیر در فرم ها استفاده می شود.

    console.log(people);
       
})

// دکمه مربوط به نمایش همه کاربران
document.getElementById("showModal").addEventListener("click",
    ()=>{
        if(people.length === 0){
            modal.innerHTML = `<h3>هنوز کاربری ثبت نشده است.</h3>`
        }else{
            modal.innerHTML = `<h3>لیست کاربران :</h3>`
            const list = document.createElement("ul");

            people.map((person , index) =>{

                // const name = person.name;
                // const family = person.family;
                // const email = person.email;
                // const job = person.job;
                // const phone = person.phone;
                // const gender = person.gender;

                //Destructuring Assigment:باز کردن ترکیب
                const {name,family,email,job,phone,gender} = person ;

                const li = document.createElement("li");
                li.innerText = `${index + 1}. ${name} ${family}
                ایمیل : ${email}
                شغل : ${job || '---'}
                تلفن : ${phone || '---'}
                جنسیت : ${gender || '---'}`;

                list.appendChild(li)
            })
            modal.appendChild(list);
                      
        }

        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
    })

    //بستن مدال با کلیک روی پس زمینه
    overlay.addEventListener("click" , ()=>{
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    });