import './button.css';

const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    console.log(other);
    return <button className={className} {...other} />;
};

export default Button;
