function Footer() {
    const date = new Date();
    return (
        <div className="text-center p-3">
            Copyright &copy; {date.getFullYear()} CodewithTemi{" "}
        </div>
    );
}

export default Footer;
