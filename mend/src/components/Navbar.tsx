import { useState } from "react";
import {
    ArrowUpRight,
    Leaf,
    Menu,
    Plus,
    x,
} from "lucide-react";

interface NavbarProps {
    onExplore: () => void;
    onImpact: () => void;
    onOrganization: () => void;
    onCreateReport: () => void;
}

export default function Navbar ({
    onExplore,
    onImpact,
    onOrganization,
    onCreateReport,
}: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    const navigate = (action: () => void) => {
        action();
        setMenuOpen(false)
    }
}