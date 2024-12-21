import { UserProps } from "@/interfaces";
import { Globe, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const UserCard: React.FC<UserProps> = ({
    name,
    username,
    email,
    address,
    phone,
    website,
    company
}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-500">@{username}</p>
            </div>

            <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                    <a href={`mailto:${email}`} className="hover:text-blue-600 truncate">
                        {email}
                    </a>
                </div>

                <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="truncate">
                        {address.street}, {address.suite}, {address.city}
                    </span>
                </div>

                <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                    <a href={`tel:${phone}`} className="hover:text-blue-600 truncate">
                        {phone}
                    </a>
                </div>

                <div className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-2 flex-shrink-0" />
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 truncate"
                    >
                        {website}
                    </a>
                </div>

                <div className="flex items-start text-gray-600">
                    <Briefcase className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <div className="truncate">
                        <p className="font-medium">{company.name}</p>
                        <p className="text-sm italic truncate">{company.catchPhrase}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;