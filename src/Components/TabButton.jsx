export default function TabButton({children, onSelect, isSelected = false})
{

    return <li><button className={isSelected ? "active" : null} onClick={onSelect}>{children}</button></li>
}