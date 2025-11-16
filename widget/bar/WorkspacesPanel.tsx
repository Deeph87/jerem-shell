import AstalHyprland from "gi://AstalHyprland";

export default function WorkspacesPanel() {
    const labels = ["1", "2", "3", "4", "5"];
    const hyprland = new AstalHyprland.Hyprland();

    return (
        <box>
            {labels.map((label) => (
                <button onClicked={() => { hyprland.dispatch('workspace', label); print(`workspace ${label}`) }}>{label}</button>
            ))}
        </box>
    )
}
