type LogoProps = {
  text?: string;
  subtitle?: boolean;
};


const Logo = ({
  text = "SIP Tracker",
  subtitle = false
}: LogoProps) => {
return (
  <>
<h2 className="logo">
{text}
</h2>
{
subtitle &&
<p>
Sign in to explore funds and invest
</p>
}
</>
);
};

export default Logo;