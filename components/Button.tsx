import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string; //icon is optional
  variant: string;
  full?: boolean; //full is opcional
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src={icon} alt={title} width={15} height={15}/>}
    </button>
  )
}

export default Button