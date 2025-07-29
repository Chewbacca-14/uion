import { Component } from '@angular/core';
import { FaqCardComponent } from '../../shared/components/faq-card/faq-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqCardComponent, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faq = [
    {
      question: 'Jak dlouho trvá vývoj aplikace nebo webu?',
      answer:
        'Záleží na rozsahu projektu – jednoduché weby nebo landing pages zvládneme za 1–4 týdny, větší aplikace mohou trvat několik měsíců.',
    },
    {
      question: 'Můžeme spolupracovat i na dálku?',
      answer:
        'Ano, spolupráce probíhá zcela online – komunikujeme přes e-mail, videohovory a sdílíme návrhy přes cloudové nástroje. Rádi se ale podle potřeby i osobně setkáme a vše probereme offline.',
    },
    {
      question: 'Kolik stojí vaše služby?',
      answer:
        'Cena závisí na rozsahu a náročnosti projektu. Jako malý tým máme minimum byrokracie, nižší provozní náklady a rychlé rozhodování, díky čemuž si můžeme dovolit nabídnout férové a konkurenceschopné ceny – a to bez kompromisů na kvalitě. Rádi vám připravíme nezávaznou cenovou nabídku po krátké konzultaci.',
    },
    {
      question: 'Poskytujete i správu po dokončení projektu?',
      answer: 'Ano, nabízíme údržbu, aktualizace i podporu podle dohody.',
    },
    {
      question:
        'Můžeme si od vás nechat udělat jen návrh (UI/UX), ale vývoj řešit jinde?',
      answer:
        'Samozřejmě – můžeme vytvořit pouze návrh designu nebo prototyp, který předáte svému vývojovému týmu.',
    },
    {
      question: 'Děláte i úpravy již existujících projektů?',
      answer:
        'Ano, pokud je váš projekt technicky proveditelný a má jasné zadání, můžeme ho převzít nebo vylepšit.',
    },
    {
      question:
        'Postaráte se i o technické věci jako doména nebo zveřejnění aplikace?',
      answer:
        'Ano, postaráme se o vše potřebné. Zajistíme registraci domény, hosting, nasazení webu i publikaci mobilní aplikace do App Store a Google Play. Umíme vyřešit celý proces tak, abyste se nemuseli starat o žádné technické detaily – vše zvládneme na klíč.',
    },
    {
      question: 'Co když mám jen nápad, ale nevím přesně, co potřebuji?',
      answer:
        'To vůbec nevadí – pomůžeme vám nápad rozpracovat. Společně projdeme vaše představy, navrhneme vhodné řešení a vytvoříme jasné zadání. Máme zkušenosti s vedením projektů od úplného začátku, takže vás provedeme celým procesem krok za krokem.',
    },
  ];

  expandedIndex: number | null = null;

  toggleCard(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
