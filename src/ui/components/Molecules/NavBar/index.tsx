import Link from 'next/link';
import { Container, AppList, AppListItem, Logo } from './styles'

export const NavBar = () => {
    return (
        <Container>
            <Logo
                src="/img/NavBar/dog-logo.png"
                alt="Logo Dog Curioso
"
            />
            <AppList>
                <AppListItem>
                    <Link href="/breed">Raça</Link>
                </AppListItem>
                <AppListItem>
                    <Link href="/breed">Saúde </Link>
                </AppListItem>
                <AppListItem>
                    <Link href="/breed">Espécies</Link>
                </AppListItem>
                <AppListItem>
                    <Link href="/breed">Bem-Estar</Link>
                </AppListItem>
            </AppList>
            <Logo
                src="/img/NavBar/dog-logo.png"
                alt="Logo Dog Curioso
"
            />
        </Container>
    )
}
