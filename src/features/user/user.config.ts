import { IUser } from '@/features/user/user.domain';

const getAvatarSrc = (n: number, format: string) => `${window.location.origin}/public/user-avatar/${n}.${format}`;

export const userConfig: IUser[] = [
    { id: '1', name: 'Кот', avatarSrc: getAvatarSrc(1, 'jpg') },
    { id: '2', name: 'Пёс', avatarSrc: getAvatarSrc(2, 'jpg') },
    { id: '3', name: 'Панда', avatarSrc: getAvatarSrc(3, 'jpg') },
    { id: '4', name: 'Лемур', avatarSrc: getAvatarSrc(4, 'jpg') },
    { id: '5', name: 'Слон', avatarSrc: getAvatarSrc(5, 'png') },
    { id: '6', name: 'Енот', avatarSrc: getAvatarSrc(6, 'png') },
    { id: '7', name: 'Лев', avatarSrc: getAvatarSrc(7, 'jpg') },
    { id: '8', name: 'Горилла', avatarSrc: getAvatarSrc(8, 'jpg') },
    { id: '9', name: 'Волк', avatarSrc: getAvatarSrc(9, 'png') },
    { id: '10', name: 'Медведь', avatarSrc: getAvatarSrc(10, 'jpg') },
    { id: '11', name: 'Змея', avatarSrc: getAvatarSrc(11, 'jpg') },
    { id: '12', name: 'Орел', avatarSrc: getAvatarSrc(12, 'jpg') }
];
