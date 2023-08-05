import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

export default function Profile() {
    return (
        <div>
            <Avatar icon={<UserOutlined />}/>
        </div>
    )
}