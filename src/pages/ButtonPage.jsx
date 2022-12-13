import Button from "../components/Button";
import {
  MdAccountBalanceWallet,
  MdBookmarkAdd,
  MdFitScreen,
} from "react-icons/md";

function ButtonPage() {
  const handleClick = () => console.log("Click");
  const handleMouseEnter = () => console.log("Mouse enter");

  return (
    <div>
      <div className="grid grid-cols-6">
        <Button
          className="mb-9"
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          inactive
        >
          Inactive
        </Button>

        <Button primary>Primary</Button>

        <Button secondary>Secondary</Button>

        <Button success>Success</Button>

        <Button warning>Warning</Button>

        <Button danger>Danger</Button>
      </div>

      <div className="grid grid-cols-6">
        <Button inactive>
          Inactive <MdAccountBalanceWallet />
        </Button>

        <Button primary>
          Primary <MdAccountBalanceWallet />
        </Button>

        <Button secondary>
          Secondary <MdAccountBalanceWallet />
        </Button>

        <Button success>
          Success <MdAccountBalanceWallet />
        </Button>

        <Button warning>
          Warning <MdAccountBalanceWallet />
        </Button>

        <Button danger>
          Danger <MdAccountBalanceWallet />
        </Button>
      </div>

      <div className="grid grid-cols-6">
        <Button inactive outline>
          Inactive
        </Button>

        <Button primary outline>
          Primary
        </Button>

        <Button secondary outline>
          Secondary
        </Button>

        <Button success outline>
          Success
        </Button>

        <Button warning outline>
          Warning
        </Button>

        <Button danger outline>
          Danger
        </Button>
      </div>
      <div className="grid grid-cols-6">
        <Button inactive rounded>
          Inactive
        </Button>

        <Button primary rounded>
          Primary
        </Button>

        <Button secondary rounded>
          Secondary
        </Button>

        <Button success rounded>
          Success
        </Button>

        <Button warning rounded>
          Warning
        </Button>

        <Button danger rounded>
          Danger
        </Button>
      </div>

      <div className="grid grid-cols-6">
        <Button inactive rounded>
          Inactive <MdAccountBalanceWallet />
        </Button>

        <Button primary rounded>
          Primary <MdBookmarkAdd />
        </Button>

        <Button secondary rounded>
          Secondary <MdFitScreen />
        </Button>

        <Button success rounded>
          Success <MdAccountBalanceWallet />
        </Button>

        <Button warning rounded>
          Warning <MdFitScreen />
        </Button>

        <Button danger outline rounded>
          Danger <MdBookmarkAdd />
        </Button>
      </div>

      <div className="grid grid-cols-6">
        <Button inactive rounded outline>
          Inactive
        </Button>

        <Button primary rounded outline>
          Primary
        </Button>

        <Button secondary rounded outline>
          Secondary
        </Button>

        <Button success rounded outline>
          Success
        </Button>

        <Button warning rounded outline>
          Warning
        </Button>

        <Button danger rounded outline>
          Danger
        </Button>
      </div>

      <div className="grid grid-cols-6">
        <Button inactive rounded outline>
          Inactive <MdAccountBalanceWallet />
        </Button>

        <Button primary rounded outline>
          Primary <MdAccountBalanceWallet />
        </Button>

        <Button secondary rounded outline>
          Secondary <MdAccountBalanceWallet />
        </Button>

        <Button success rounded outline>
          Success <MdAccountBalanceWallet />
        </Button>

        <Button warning rounded outline>
          Warning <MdAccountBalanceWallet />
        </Button>

        <Button danger rounded outline>
          Danger <MdAccountBalanceWallet />
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
