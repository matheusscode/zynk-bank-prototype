import {
  Home,
  PiggyBank,
  CreditCard,
  List,
  ArrowDownUpIcon,
  CircleDollarSign,
  Shield,
  Settings2,
  Globe,
  Contrast,
  LucideProps,
} from "lucide-react";

interface SubListProps {
  id: number;
  text: string;
  href: string;
  icon: LucideProps | any;
}

export interface SidebarLinksProps {
  id: number;
  text: string;
  href: string;
  icon: LucideProps | any;
  subList?: SubListProps[];
}

export const SIDEBAR_ROUTES_LINKS: SidebarLinksProps[] = [
  {
    id: 1,
    text: "Início",
    href: "",
    icon: Home,
  },
  {
    id: 2,
    text: "Conta Corrente",
    href: "",
    icon: PiggyBank,
  },
  {
    id: 3,
    text: "Cartão de Crêdito",
    href: "",
    icon: undefined,
    subList: [
      {
        id: 1,
        text: "Resumo das Faturas",
        href: "",
        icon: List,
      },
      {
        id: 2,
        text: "Meus Cartões",
        href: "",
        icon: CreditCard,
      },
    ],
  },
  {
    id: 4,
    text: "Transferências",
    href: "",
    icon: ArrowDownUpIcon,
  },
  {
    id: 5,
    text: "Promoções e Ofertas",
    href: "",
    icon: CircleDollarSign,
  },
];

export const SIDEBAR_CONFIG_LINKS: SidebarLinksProps[] = [
  {
    id: 1,
    text: "Segurança",
    href: "",
    icon: Shield,
  },
  {
    id: 2,
    text: "Acessibilidade",
    href: "",
    icon: Contrast,
  },
  {
    id: 2,
    text: "Preferências",
    href: "",
    icon: Settings2,
  },
  {
    id: 3,
    text: "Idioma e Região",
    href: "",
    icon: Globe,
  },
];
