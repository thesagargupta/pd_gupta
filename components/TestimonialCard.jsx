// components/TestimonialCard.jsx
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">
        "{testimonial.message}"
      </p>
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.company}</p>
      </div>
    </div>
  );
}
