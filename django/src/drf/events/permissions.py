from rest_framework import permissions

class IsEventOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, event):
        if request.method in permissions.SAFE_METHODS:
            return True
        return event.club.owner == request.user