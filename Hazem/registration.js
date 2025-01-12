document.querySelector("#registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    // استحضار  القيم من الحقول
    const fullName = document.querySelector("#fullName").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const birthDate = document.querySelector("#birthDate").value;
    const gender = document.querySelector('input[name="gender"]:checked').nextElementSibling.textContent;
    const address = document.querySelector("#address").value;
    const country = document.querySelector("#country").value;
    const city = document.querySelector("#city").value;

    // تاكد من صحة البيانات
    const namePattern = /^[A-Za-z\s]+$/; // فقط أحرف ومسافات
    if (!namePattern.test(fullName)) {
        alert("Please enter a valid name (only letters and spaces are allowed).");
        return;
    }

    const phonePattern = /^[0-9]+$/; // فقط أرقام
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number (only numbers are allowed).");
        return;
    }

    const birthDatePattern = /^\d{4}-\d{2}-\d{2}$/; // صيغة التاريخ
    if (!birthDatePattern.test(birthDate)) {
        alert("Please enter a valid birth date (format: YYYY-MM-DD).");
        return;
    }

    // تخزين البيانات في Local Storage
    const userData = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        birthDate: birthDate,
        gender: gender,
        address: address,
        country: country,
        city: city,
    };

    // تحويل object  إلى JSON وحفظه
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Data saved successfully!");

    // إعادة تعيين الحقول
    document.querySelector("#registrationForm").reset();
});
