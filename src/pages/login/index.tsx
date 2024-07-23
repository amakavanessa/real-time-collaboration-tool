import TextField from "../../components/atoms/text-field";
import useWindowSize from "../../hooks/use-window-size";

const Login = () => {
  const { widthStr, heightStr } = useWindowSize();
  return (
    <div
      className="w-full flex flex-col sm:justify-center items-center p-6 sm:pb-96 bg-gray-100 dark:bg-slate-900 text-primary"
      style={{ width: widthStr, height: heightStr }}
    >
      <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded border-primary shadow-md border dark:border-0 dark:shadow-xl p-6">
        <div className="flex flex-col space-y-4">
          <div className="w-full text-center flex flex-col justify-center items-center">
            <h1>Logo</h1>
            <h1 className="font-medium text-2xl">Sign In</h1>
            <p className="font-medium">to continue to Docs</p>
          </div>
          <TextField
            value="Email"
            onInput={() => {}}
            label="Email"
            color="secondary"
            errors={[]}
          />
          <p className="text-sm hover:underline font-semibold text-blue-500 text-left">
            Need an account? - router to register
          </p>
          <TextField
            value="Password"
            onInput={() => {}}
            label="Password"
            type="password"
            color="secondary"
            errors={[]}
          />

          <button
            tabIndex={-1}
            className="text-sm hover:underline font-semibold text-blue-500 text-left"
          >
            Forgot Password?
          </button>

          <button
            onClick={() => {}}
            disabled={false}
            className="bg-blue-600 text-white text-sm font-semibold px-3 py-2 rounded hover:bg-blue-500 flex justify-center items-center space-x-1 active:ring-1"
          >
            <span className="">Login</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center space-x-4 text-sm p-4">
        <button className="hover:underline font-semibold text-blue-500">
          Terms
        </button>
        <button className="hover:underline font-semibold text-blue-500">
          Privacy Policy
        </button>
      </div>
    </div>
  );
};

export default Login;
