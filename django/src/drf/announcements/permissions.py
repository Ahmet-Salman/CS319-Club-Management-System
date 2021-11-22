from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, announcement):
        if request.method in permissions.SAFE_METHODS:
            return True
        return announcement.club.owner == request.user