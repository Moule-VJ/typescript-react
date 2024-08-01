interface BasicProfileCardsProps {
  type: "basic";
  name: string;
}

interface AdvancedProfileCardsProps {
  type: "advanced";
  name: string;
  email: string;
}

type ProfileCards = BasicProfileCardsProps | AdvancedProfileCardsProps;

function Component(props: ProfileCards) {
  const { type, name } = props;

  if (type === "basic") {
    return (
      <>
        <h2>{name}</h2>
      </>
    );
  }
  return (
    <>
      <h2>{name}</h2>
      <h2>{props.email}</h2>
    </>
  );
}
export default Component;
