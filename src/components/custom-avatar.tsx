import { Avatar as AntdAvatar, AvatarProps } from "antd"


type Props = AvatarProps & {
    name: string
}

function CustomAvatar({ name, style, ...rest }: Props) {
    return (
        <AntdAvatar
            alt={name}
            size={'small'}
            style={{
                backgroundColor: '#87d068',
                display: 'flex',
                alignItems: 'center',
                border: 'none'
            }}
        >
            {name}
        </AntdAvatar>
    )
}

export default CustomAvatar