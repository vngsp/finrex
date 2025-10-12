'use client';
import BarsLogin from './barsLogin';
import Cubes from './Cubes';
import FormAction from './FormAction';
import LinesLogin from './linesLogin';

const LoginForm = () => {
  return (
    <div className={'flex h-screen w-screen justify-center'}>
      <div className={'w-1/2 bg-white p-8'}>
        <div>
          <img src='/darkLogo.png' alt='' className={'w-40'} />
        </div>
        <div className={'mt-24'}>
          <FormAction />
        </div>
      </div>
      <div className={'btn-gradient flex w-full flex-col'}>
        <div className={'flex flex-col items-center justify-center'}>
          <Cubes position={'fixed'} relativeY={'-top-1'} relativeX={'left-132'} />
          <LinesLogin />
          <BarsLogin />
          <Cubes position={'fixed'} relativeY={'top-178'} relativeX={'left-384'} rotate={'rotate-180'} />
        </div>
        <div className={'relative top-143 flex flex-col items-center justify-center'}>
          <h3 className={'mb-2 text-xl font-bold'}>Change the way you Manage Your Money</h3>
          <p className={'w-60 text-center'}>
            Welcome to Finrex — your smart tool for organizing and tracking your finances with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
