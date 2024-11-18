

// 1. Promise Object


export const agePromise: Promise<string> = new Promise<string>((resolve1, reject1) => {
    if (true) {
        resolve1("92");  // Resolves the promise after 2 seconds
    }
    else {
        reject1("agePromise error");  // Reject the promise after 2 seconds
    }
});


