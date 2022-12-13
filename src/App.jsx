import Button from "./Button";

function App() {
  return (
    <div>
      <Button primary>Primary</Button>

      <Button secondary>Secondary</Button>

      <Button success>Success</Button>

      <Button warning>Warning</Button>

      <Button danger>Danger</Button>

      <div>
        <Button primary rounded>
          Primary Rounded
        </Button>

        <Button secondary rounded>
          Secondary Rounded
        </Button>

        <Button success rounded>
          Success Rounded
        </Button>

        <Button warning rounded>
          Warning Rounded
        </Button>

        <Button danger rounded>
          Danger Rounded
        </Button>
      </div>
    </div>
  );
}

export default App;
