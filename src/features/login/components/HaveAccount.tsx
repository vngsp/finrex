type Props = {
  hasLoggedIn: boolean;
  toggleLogged: () => void;
};
const HaveAccount = ({ hasLoggedIn, toggleLogged }: Props) => {
  return (
    <p onClick={toggleLogged} className={'cursor-pointer text-[0.90rem] font-bold'}>
      {!hasLoggedIn ? `Don't have an account?` : 'Already have an account?'}
      <span className={'ml-1 text-[var(--purple-theme)]'}>{!hasLoggedIn ? `Sign Up` : 'Login'}</span>
    </p>
  );
};

export default HaveAccount;
