import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../visuals/Logo";
import MainNavLinks from "./MainNavLinks";

export default function Navbar() {
    return (
        <StyledNavbar
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
        >
            <Link href="/">
                <a href="/">
                    <Logo />
                </a>
            </Link>
            <MainNavLinks />
        </StyledNavbar>
    );
}

const StyledNavbar = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--space-s) var(--space-m) var(--space-s) 1.3rem;
`;