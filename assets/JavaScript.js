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

            // map(): زمانی استفاده می کنیم که یک خروجی (ریترن) داشته باشیم و خروجی یک آرایه است.
            // people.map((person , index) =>{

            //forEach(): حلقه ای که دقیقا شبیه مپ رفتار می کند،صرفا برای مواقعی که هدف ما از حلقه یک عملیات باشد و نیاز به مقدار خروجی نداشته باشیم 
            people.forEach((person , index) =>{

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

// پیدا کردن با ایمیل
document.getElementById("findlyByEmail").addEventListener("click" , ()=>{
    const emailToFind = prompt("ایمیل مورد نظر را وارد کنید:");
    // const person = people.find((p)=>{return p.email === emailToFind.trim()})
    const person = people.find(p => p.email === emailToFind.trim())

    if(person){
        const {name , family , job , phone , gender} = person;
        modal.innerHTML = `
        <h3>فرد یافت شد :</h3>
        <p>نام : ${name}</p>
        <p>نام خانوادگی : ${family}</p>
        <p>شغل : ${job}</p>
        <p> شماره تماس : ${phone}</p>
        <p>جنسیت : ${gender}</p>
        `;
    }else{
        modal.innerHTML = `<p>فردی با این ایمیل یافت نشد😨</p>`;
    }

    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
})