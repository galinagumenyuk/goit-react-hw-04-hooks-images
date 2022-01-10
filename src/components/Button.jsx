import { Button } from "./Button.styled";

export default function ButtonLoadMore({onClick}) {
    const handleClick = () => {
    onClick(true);
    };
        return (
            <Button type="button" onClick={handleClick}>Load more</Button>
    )
}

