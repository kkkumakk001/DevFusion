type Props = {
    children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
    return <h2 className="font-semibold text-primary">{children}</h2>;
}
