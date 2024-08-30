import ComponentDetail from "./ComponentDetail";

export default function PhotoModal({
    params: { name: componentName },
}: {
    params: { name: string };
}) {
    return <ComponentDetail>{componentName}</ComponentDetail>;
}
