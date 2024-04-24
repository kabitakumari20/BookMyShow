exports.errorHandler = (e, status = 400) => {
    let errorMsg, msg, err;
    const messages = {
      duplicateEmail: "Email already exists.",
      duplicatePhone: "Phone number already exists.",
      passwordRequired: "Password is required.",
      invalidEmail: "Invalid email format.",
      serverError: "Internal server error."
      // Add more error messages as needed
    };
  
    if (typeof e != "object") {
      msg = e;
    } else {
      err = e.message;
      if (err.includes("email_1 dup")) {
        msg = messages.duplicateEmail;
      } else if (err.includes("phone_1 dup")) {
        msg = messages.duplicatePhone;
      } else if (err.includes("valid email")) {
        msg = e.message;
      } else if (err.includes("`password` is required")) {
        msg = messages.passwordRequired;
      } else if (err.includes("not a valid email")) {
        msg = messages.invalidEmail;
      } else if (err.includes("undefined") || err.includes("null")) {
        msg = messages.serverError;
      } else if (e.code == 11000) {
        msg = e.message;
      }
    }
  
    errorMsg = {
      error: err || msg || messages.serverError,
      body: msg || messages.serverError,
      status: status
    };
    return errorMsg;
  };
  
  
