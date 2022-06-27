import logo from '@assets/img/logo.svg';

export default function Logo() {
  return (
    <div className="inline-flex justify-center w-full">
      <img src={logo} className="w-40 h-40" alt="logo" />
    </div>
  );
}
