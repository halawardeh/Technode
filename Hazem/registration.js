document.querySelector("#registrationForm").addEventListener("submit", function (event) {
    // التحقق من إدخال الاسم (لازم يحتوي على أحرف كبيرة وصغيرة بس)
    const fullName = document.querySelector("#fullName").value;
    const namePattern = /^[A-Za-z\s]+$/; // يسمح بس بالأحرف الكبيرة والصغيرة والمسافات
    if (!namePattern.test(fullName)) {
        alert("Please enter a valid name (only letters and spaces are allowed).");
        event.preventDefault(); // إيقاف إرسال النموذج إذا كانت الحقول فارغة أو غير صحيحة
        return; // التوقف عن متابعة التحقق
    }

    // التحقق من إدخال رقم الهاتف (يجب أن يحتوي على أرقام فقط)
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const phonePattern = /^[0-9]+$/; // يسمح فقط بالأرقام
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number (only numbers are allowed).");
        event.preventDefault(); // إيقاف إرسال النموذج إذا كانت الحقول فارغة أو غير صحيحة
        return;
    }

    // التحقق من إدخال تاريخ الميلاد (يجب أن يكون بتنسيق YYYY-MM-DD)
    const birthDate = document.querySelector("#birthDate").value;
    const birthDatePattern = /^\d{4}-\d{2}-\d{2}$/; // يغة التاريخ يجب أن تكون yyyy-mm-dd
    if (!birthDatePattern.test(birthDate)) {
        alert("Please enter a valid birth date (format: YYYY-MM-DD).");
        event.preventDefault(); // إيقاف إرسال النموذج إذا كانت الحقول فارغة أو غير صحيحة
        return;
    }

    // يمكنك إضافة المزيد من التحقق هنا حسب الحاجة
});
