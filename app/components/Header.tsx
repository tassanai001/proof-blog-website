interface HeaderProps {
    onSuggestClick: (title: SuggestType) => void
}

export enum SuggestType {
    Article = "ARTICLE",
    Suggest = "SUGGEST",
    Subscribe = "SUBSCRIBE",
    About = "ABOUT",
}

export default function Header({ onSuggestClick }: HeaderProps) {
    return (
        <header className="flex justify-between items-center p-4 border-b">
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onSuggestClick(SuggestType.Article); }} className="text-green-600">ARTICLES</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onSuggestClick(SuggestType.Suggest); }}>SUGGEST</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onSuggestClick(SuggestType.Subscribe); }} >SUBSCRIBE</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onSuggestClick(SuggestType.About); }}>ABOUT</a></li>
                </ul>
            </nav>
        </header>
    );
}