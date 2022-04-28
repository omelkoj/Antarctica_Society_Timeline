import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
//import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 450, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        {/*<ListSubheader component="div">December</ListSubheader>*/}
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2020/12/antarctica-1223201.jpg",
    title: "News In London",
    author: "Years 1949-1950",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/db/First_women_at_the_South_Pole_Pam_Young%2C_Jean_Pearson%2C_Lois_Jones%2C_Eileen_McSaveney%2C_Kay_Lindsay_and_Terry_Tickhill.jpg",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
  },
  {
    img: "https://www.chimuadventures.com/blog/wp-content/uploads/2016/08/Emperor_Penguins_Snow_shutterstock_235533067-1024x687.jpg",
    title: "News In London",
    author: "Years 1949-1950",
  },
  {
    img: "https://i.insider.com/61a69c500ed48c0019e52598?width=1000&format=jpeg&auto=webp",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
    cols: 2,
  },
  {
    img: "https://media.istockphoto.com/photos/iceberg-floats-in-andord-bay-on-graham-land-antarctica-picture-id465992166?k=20&m=465992166&s=612x612&w=0&h=y6StqKVF7aqzQvQNdEOmWfuUgMuQkJTxPhLzmQh4UIc=",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
    cols: 2,
  },
  {
    img: "https://iaato.org/wp-content/uploads/2020/08/PastedGraphic-3.jpeg",
    title: "News In London",
    author: "Years 1949-1950",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://cdn.theatlantic.com/thumbor/rPvBwChDhoBgn639Txvx7M4eQa4=/900x600/media/img/photo/2019/02/antarctica/a20_1124834828/original.jpg",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/db/First_women_at_the_South_Pole_Pam_Young%2C_Jean_Pearson%2C_Lois_Jones%2C_Eileen_McSaveney%2C_Kay_Lindsay_and_Terry_Tickhill.jpg",
    title: "Year 1949-1950",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://cdn.britannica.com/72/153472-050-4DF2D58F/Emperor-penguins-Antarctica.jpg",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/3YtWkM3eghxvYLTTNkuXXg.jpg",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
  },
  {
    img: "https://wp-cpr.s3.amazonaws.com/uploads/2019/07/260269378_1997468728.jpg",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
  },
  {
    img: "https://brewminate.com/wp-content/uploads/2021/05/051921-28-History-Antarctica.jpg",
    title: "CommonWealth Bay",
    author: "Year 1949-1950",
    cols: 2,
  },
];
