import Image from "next/image";
import Link from "next/link";
export default function Attirebella() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/attirebella.svg"
          alt="Attirebella"
          priority
          width={170}
          height={38}
        />
      </Link>
    </>
  );
}
