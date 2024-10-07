import React from "react";
import { Btn } from "./assets/components/ui/btn/btn";
import { useForm } from "react-hook-form";
import { Input } from "./assets/components/ui/input/input";
function App() {
  const { register, handleSubmit } = useForm();
  const Submit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <div className="block">
          <div className="text_block">
            <h1 className="title">Learn to code by watching others</h1>
            <p className="text">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </div>
          <div className="boxx">
            <Btn variant={"primary"} size={"large"}>
              Try it free 7 days then $20/mo. thereafter
            </Btn>
            <div className="iput_block">
              <form onSubmit={handleSubmit(Submit)}>
                <Input
                  name={"UserName"}
                  placeholder={"First Name"}
                  variant={"primary"}
                  size={"middle"}
                  type={"text"}
                  register={register}
                />
                <Input
                  name={"UserLastName"}
                  placeholder={"Last Name"}
                  variant={"primary"}
                  size={"middle"}
                  type={"text"}
                  register={register}
                />
                <Input
                  name={"UserEmailAddress"}
                  placeholder={"Email Address"}
                  variant={"primary"}
                  size={"middle"}
                  type={"text"}
                  register={register}
                />
                <Input
                  name={"UserPassword"}
                  placeholder={"Password"}
                  variant={"primary"}
                  size={"middle"}
                  type={"password"}
                  register={register}
                />
                <Btn variant={"secondary"} size={"middle"} type={"submit"}>
                  CLAIM YOUR FREE TRIAL
                </Btn>
              </form>
              <p className="mini_text">
                By clicking the button, you are agreeing to our{" "}
                <span className="span_color">Terms and Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
