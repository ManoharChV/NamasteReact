import { User } from "./User";
import UserClass from "./UserClass";

function About() {
    return (
    <div><h1>About</h1>
    <User name="Manohar" location="Hyderabad" contact="87343275723"></User>
    <UserClass   name="Manohar class" location="Hyderabad" contact="87343275723"></UserClass>
    </div>);
}

export default About;