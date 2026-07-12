import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ResolvedArticle } from '@/lib/fallbackContent';
import { useLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';
import { pickLocaleCopy, simplePageCopy } from '@/lib/pageCopy';

interface InsightCardProps {
  article: ResolvedArticle;
}

export const InsightCard: React.FC<InsightCardProps> = ({ article }) => {
  const { locale, isRTL } = useLocale();
  const copy = pickLocaleCopy(simplePageCopy, locale);

  return (
    <Link
      to={`/resources/${article.slug}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        'media-pop-card group flex h-full flex-col rounded-[34px] border border-ink/10 bg-card p-4 shadow-[0_22px_54px_-42px_rgba(8,15,32,0.18)] transition-all hover:border-ink/18 hover:shadow-xl md:p-5',
        isRTL && 'text-right'
      )}
    >
      <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[26px] bg-muted">
        {article.thumbnail_url ? (
          <img src={article.thumbnail_url} alt={article.title} className="media-pop-target h-full w-full object-cover" />
        ) : (
          <span className="px-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {article.category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-6 md:px-2">
        {article.category && (
          <span className="mb-3 w-fit rounded-full border border-plate-violet/15 bg-plate-violet/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-plate-violet">
            {article.category}
          </span>
        )}
        <h3 className="mb-3 min-h-[4rem] font-serif text-heading-md text-foreground transition-colors group-hover:text-lavender">
          {article.title}
        </h3>
        <p className="line-clamp-3 flex-1 text-body-sm text-muted-foreground">{article.excerpt}</p>
        <span className={cn('mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-lavender', isRTL && 'flex-row-reverse')}>
          {copy.readArticle}
          <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
        </span>
      </div>
    </Link>
  );
};

export default InsightCard;
