'use client';

import { useFormContext } from 'react-hook-form';
import { CalendarCheck, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { AVAILABLE_FALL_DELIVERY_DATES } from '@/lib/constants';
import type { BookingFormData } from '@/lib/types';

interface StepDeliveryProps {
  onNext: () => void;
  onBack: () => void;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

export function StepDelivery({ onNext, onBack }: StepDeliveryProps) {
  const { watch, setValue } = useFormContext<BookingFormData>();
  const fallDeliveryDate = watch('fallDeliveryDate');
  const fallDeliveryScheduledLater = watch('fallDeliveryScheduledLater');

  const canProceed = fallDeliveryScheduledLater || !!fallDeliveryDate;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Fall delivery</h2>
        <p className="mt-2 text-muted-foreground">
          When do you want your stuff back? You can schedule now or decide later.
        </p>
      </div>

      {/* Schedule Options */}
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => {
            setValue('fallDeliveryScheduledLater', false);
          }}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            !fallDeliveryScheduledLater
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <CalendarCheck
            className={cn(
              'h-10 w-10',
              !fallDeliveryScheduledLater ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Schedule Now</p>
            <p className="text-sm text-muted-foreground">Pick a date in August</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => {
            setValue('fallDeliveryScheduledLater', true);
            setValue('fallDeliveryDate', '');
          }}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            fallDeliveryScheduledLater
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <CalendarClock
            className={cn(
              'h-10 w-10',
              fallDeliveryScheduledLater ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Decide Later</p>
            <p className="text-sm text-muted-foreground">We&apos;ll reach out in August</p>
          </div>
        </button>
      </div>

      {/* Date Selection */}
      {!fallDeliveryScheduledLater && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <Label htmlFor="fallDeliveryDate">Select your delivery date</Label>
          <Select
            value={fallDeliveryDate}
            onValueChange={(value) => setValue('fallDeliveryDate', value)}
          >
            <SelectTrigger id="fallDeliveryDate">
              <SelectValue placeholder="Choose a date" />
            </SelectTrigger>
            <SelectContent>
              {AVAILABLE_FALL_DELIVERY_DATES.map((date) => (
                <SelectItem key={date} value={date}>
                  {formatDate(date)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Scheduled Later Note */}
      {fallDeliveryScheduledLater && (
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <p className="text-muted-foreground">
            No problem! We&apos;ll contact you in early August to schedule your delivery.
            You can also schedule anytime from your dashboard.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack}>
          Back
        </Button>
        <Button type="button" size="lg" onClick={onNext} disabled={!canProceed}>
          Continue
        </Button>
      </div>
    </div>
  );
}
