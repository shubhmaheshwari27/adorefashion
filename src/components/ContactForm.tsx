// const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const response = await fetch("/api/submit-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.result === "success") {
//         setStatus("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         setStatus("Something went wrong. Try again later.");
//       }
//     } catch (error) {
//       console.error("Submit Error:", error);
//       setStatus("Error sending message.");
//     }
//   };

{/* Contact Form */}
              {/* https://script.google.com/macros/s/AKfycbx55K6HGBfQGrT6-mZUPaYn0RZkpQ3VCqlDWRsWYCFXvFYsOgArlxkwX9kUtlps4u7J/exec */}
              {/* <AnimatedScroll direction="left">
                <div className="glassmorphism p-10 rounded-xl bg-white/5">
                  <h2 className="text-2xl font-bold text-amber-800 mb-8">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={5}
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-700 hover:bg-amber-800 rounded-full py-6"
                    >
                      Send Message
                    </Button>
                    <p className="text-sm text-gray-500">{status}</p>
                  </form>
                </div>
              </AnimatedScroll>*/}