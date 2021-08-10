import React from 'react'
import Link from "next/link";
import { Avatar } from "@material-ui/core";

interface props {
  link: string;
  image: string;
  height: number;
  width: number;
}

const DashboardDrawer = ({ link, image, width, height }: props) => {
  return (
    <>
      <Link href={link}>
        <a>
          <Avatar
            src={image}
            variant="square"
            sx={{ width: { width }, height: { height } }}
          />
        </a>
      </Link>
    </>
  );
};

export default DashboardDrawer;
