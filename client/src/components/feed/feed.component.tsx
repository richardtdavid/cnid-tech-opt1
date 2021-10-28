import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./feed.styles";
import { Articles } from "../../utils/news.feed";
import { Divider } from "@material-ui/core";

export const Feed = ({ title, urlToImage, description, content }: Articles) => {
  const { media, root, divider, avatar, bullet, button } = useStyles();

  return (
    <Card className={root}>
      <CardContent className={media}>
        <Avatar
          className={avatar}
          key={urlToImage}
          src={urlToImage}
          sizes="large"
          variant="square"
        />
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          {description}
        </Typography>

        {content
          ?.split(",")
          .slice(0, 5)
          ?.map((sentence: string) => {
            return (
              <ul className={bullet} key={urlToImage + sentence}>
                <li>{sentence}</li>
              </ul>
            );
          })}
      </CardContent>
      <Divider className={divider} light />
      <Button className={button} size="small" color="primary">
        View Full Coverage
      </Button>
    </Card>
  );
};
