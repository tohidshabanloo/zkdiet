import Image from "next/image";

function StudioLogo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/yoga.png"
        className="rounded-full object-cover"
        height={35}
        width={35}
        alt="studio_logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;
