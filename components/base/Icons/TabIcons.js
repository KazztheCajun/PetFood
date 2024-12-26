import { Ionicons } from "@expo/vector-icons"

const Icon = ({ color, focused, size, selected, unselected }) =>
{
    return (
        <Ionicons
            name={focused ? selected : unselected}
            color={color}
            size={size}
        />
    )
}

export const HomeIcon = ({ color, focused }) =>
(
    <Icon
        color={color}
        focused={focused}
        selected='home-sharp'
        unselected='home-outline'
        size={24}
    />
)
    
export const InfoIcon = ({ color, focused }) =>
(
    <Icon
        color={color}
        focused={focused}
        selected='information-circle'
        unselected='information-circle-outline'
        size={24}
    />
)

export const LoginIcon = ({ color, focused }) =>
(
    <Icon
        color={color}
        focused={focused}
        selected='person-circle'
        unselected='person-circle-outline'
        size={24}
    />
)