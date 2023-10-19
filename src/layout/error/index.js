import React from "react";
import {Button} from 'antd'

function ErrorLayout({ child }) {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-3xl text-primary">Error this page isn't found 404</h1>
      <h1 className="text-3xl text-primary">Don't Worry we can redirected you to the main page</h1>
      <Button type="link" href="/" size="large">Redirect</Button>
    </div>
  );
}

export default ErrorLayout;
