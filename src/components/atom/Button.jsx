function Button({type, children, onClick, variant = "primary" }) {
  const baseStyle =
    "w-full font-dm-sans font-semibold text-sm md:text-[16px] py-2 rounded-[10px] hover:cursor-pointer hover:text-lg transition-all duration-200 ease-in-out";
  const styles = {
    primary: `${baseStyle} bg-[#3ECF4C] text-[#fff]`,
    secondary: `${baseStyle} bg-[#E2FCD9CC] text-[#3ECF4C]`,
    others: `${baseStyle} bg-white border border-[#3a35411f] text-[#333333]`,
  };
  return (
    <button type={type} onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;
